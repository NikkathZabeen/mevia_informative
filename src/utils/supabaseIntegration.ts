// interface DemoRequestData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   company: string;
//   jobTitle?: string;
//   companySize: string;
//   preferredDate: string;
//   preferredTime: string;
//   interests?: string;
// }

// interface NewsletterSubscriptionData {
//   email: string;
// }

// export const submitDemoRequestToSupabase = async (data: DemoRequestData) => {
//   try {
//     console.log('Submitting demo request to Supabase:', data);
    
//     // TODO: Replace with actual Supabase client call
//     // Make sure you have the Supabase client properly configured
//     // and the demo_requests table created with the following structure:
//     /*
//     CREATE TABLE demo_requests (
//       id SERIAL PRIMARY KEY,
//       first_name VARCHAR(100) NOT NULL,
//       last_name VARCHAR(100) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       company VARCHAR(255) NOT NULL,
//       job_title VARCHAR(100),
//       company_size VARCHAR(50) NOT NULL,
//       preferred_date DATE NOT NULL,
//       preferred_time VARCHAR(20) NOT NULL,
//       interests TEXT,
//       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//       updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
//     );
//     */
    
//     // Example Supabase call:
//     // const { data: result, error } = await supabase
//     //   .from('demo_requests')
//     //   .insert([{
//     //     first_name: data.firstName,
//     //     last_name: data.lastName,
//     //     email: data.email,
//     //     company: data.company,
//     //     job_title: data.jobTitle,
//     //     company_size: data.companySize,
//     //     preferred_date: data.preferredDate,
//     //     preferred_time: data.preferredTime,
//     //     interests: data.interests
//     //   }]);
    
//     // if (error) {
//     //   throw new Error(`Supabase error: ${error.message}`);
//     // }
    
//     return { success: true };
//   } catch (error) {
//     console.error('Supabase demo request error:', error);
//     throw error;
//   }
// };

// export const submitNewsletterSubscriptionToSupabase = async (data: NewsletterSubscriptionData) => {
//   try {
//     console.log('Submitting newsletter subscription to Supabase:', data);
    
//     // TODO: Replace with actual Supabase client call
//     // Make sure you have the newsletter_subscriptions table created:
//     /*
//     CREATE TABLE newsletter_subscriptions (
//       id SERIAL PRIMARY KEY,
//       email VARCHAR(255) UNIQUE NOT NULL,
//       status VARCHAR(20) DEFAULT 'active',
//       subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//       unsubscribed_at TIMESTAMP WITH TIME ZONE,
//       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//       updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
//     );
//     */
    
//     // Example Supabase call:
//     // const { data: result, error } = await supabase
//     //   .from('newsletter_subscriptions')
//     //   .upsert([{
//     //     email: data.email,
//     //     status: 'active',
//     //     subscribed_at: new Date().toISOString()
//     //   }], {
//     //     onConflict: 'email'
//     //   });
    
//     // if (error) {
//     //   throw new Error(`Supabase error: ${error.message}`);
//     // }
    
//     return { success: true };
//   } catch (error) {
//     console.error('Supabase newsletter subscription error:', error);
//     throw error;
//   }
// };

// export const createSupabaseTableSchemas = () => {
//   return `
// -- Demo Requests Table
// CREATE TABLE demo_requests (
//   id SERIAL PRIMARY KEY,
//   first_name VARCHAR(100) NOT NULL,
//   last_name VARCHAR(100) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   company VARCHAR(255) NOT NULL,
//   job_title VARCHAR(100),
//   company_size VARCHAR(50) NOT NULL,
//   preferred_date DATE NOT NULL,
//   preferred_time VARCHAR(20) NOT NULL,
//   interests TEXT,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
// );

// -- Newsletter Subscriptions Table
// CREATE TABLE newsletter_subscriptions (
//   id SERIAL PRIMARY KEY,
//   email VARCHAR(255) UNIQUE NOT NULL,
//   status VARCHAR(20) DEFAULT 'active',
//   subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//   unsubscribed_at TIMESTAMP WITH TIME ZONE,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
// );

// -- Add RLS (Row Level Security) policies
// ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;
// ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

// -- Example policies (adjust based on your needs)
// CREATE POLICY "Allow authenticated users to read demo_requests" ON demo_requests
//   FOR SELECT USING (auth.role() = 'authenticated');

// CREATE POLICY "Allow public to insert demo_requests" ON demo_requests
//   FOR INSERT WITH CHECK (true);

// CREATE POLICY "Allow authenticated users to read newsletter_subscriptions" ON newsletter_subscriptions
//   FOR SELECT USING (auth.role() = 'authenticated');

// CREATE POLICY "Allow public to insert newsletter_subscriptions" ON newsletter_subscriptions
//   FOR INSERT WITH CHECK (true);
// `;
// };
