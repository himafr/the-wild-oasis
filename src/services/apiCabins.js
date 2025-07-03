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

export async function createCabin(cabinData) {

  const imageName=`${Math.random()}-${cabinData.image.name}`.replaceAll("/","");
  const imagePath=`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
//1 create cabin
const { data, error } = await supabase
  .from('cabins')
  .insert([{...cabinData,image:imagePath}])
  .select()

if(error){
console.error(error);
throw new Error('Failed to fetch cabins');
}

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
return data

}
export async function updateCabin(cabinId, cabinData) {

const { data, error } = await supabase
  .from('cabins')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')
  .select()

  if(error){
console.error(error);
throw new Error('Failed to fetch cabins');
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