const SUPABASE_URL = 'https://qfhmdxfpkhlmdtgfonhn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmaG1keGZwa2hsbWR0Z2ZvbmhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc1NjM5NzcsImV4cCI6MTk3MzEzOTk3N30.0d4gRpR9OqqlLIqxPbVJcPqiAx4auu_e1mISGZ2kfHw';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function checkResponse({ error, data }) {
    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);

        return null;
    }

    return data;
}