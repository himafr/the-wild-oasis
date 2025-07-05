
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://fslvzslmpmavpanfriyi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzbHZ6c2xtcG1hdnBhbmZyaXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MzA0MTAsImV4cCI6MjA2NzAwNjQxMH0.EkRCeoFDttIjK_TwiaZAVevfbZuf0mHJZT2aSIMH8bc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
