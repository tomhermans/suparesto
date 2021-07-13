import { createClient } from '@supabase/supabase-js'
// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from './constants'

require('dotenv').config();
const {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_KEY
} = process.env;

// Create a single supabase client for interacting with your database
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY)

// Our standard serverless handler function
exports.handler = async event => {

  // Insert a row
  const { data, error } = await supabase
    .from('notes')
    .insert([
      { note: 'I need to not forget this' },
    ]);

  // Did it work?
  console.log(data, error);

}