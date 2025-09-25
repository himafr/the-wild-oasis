import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){

const { data, error } = await supabase
  .from('cabins')
  .select('*')
if(error){
console.error(error);
throw new Error('Failed to fetch cabins');
}
return data

}

export async function createUpdateCabin(cabinData,id) {
  const hasImagePath=cabinData.image?.startsWith?.(supabaseUrl)
  const imageName=`${Math.random()}-${cabinData.image.name}`.replaceAll("/","");

  const imagePath=hasImagePath?cabinData.image:`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

let query=supabase.from('cabins')

//1 create cabin
  if(!id)
 query= query.insert([{...cabinData,image:imagePath}])

if(id)
query= query.update({...cabinData,image:imagePath})
  .eq('id', id)


const {data,error}=await query.select()
if(error){
console.error(error);
throw new Error('Failed to fetch cabins');
}

if(!hasImagePath){
  //2 Upload file using standard upload
  const {  error:storageError } = await supabase.storage.from('cabin-images').upload(imageName, cabinData.image)
  if (storageError) {
    await supabase
    .from('cabins')
    .delete()
    .eq('id', data[0].id);
    console.error(storageError);
    throw new Error("cabin image could not be uploaded")
  }
}
return data

}



export async function deleteCabin(cabinId) {

const { error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', cabinId);
if(error){
console.error(error);
throw new Error('Failed to delete cabin with ID: ' + cabinId);
}
}