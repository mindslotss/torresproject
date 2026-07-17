CREATE TABLE public.estimate_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  city TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.estimate_requests TO anon;
GRANT INSERT ON public.estimate_requests TO authenticated;
GRANT ALL ON public.estimate_requests TO service_role;

ALTER TABLE public.estimate_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an estimate request"
  ON public.estimate_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 120
    AND length(email) BETWEEN 3 AND 254
    AND length(phone) BETWEEN 5 AND 40
    AND length(service) BETWEEN 1 AND 60
    AND (city IS NULL OR length(city) <= 120)
    AND (message IS NULL OR length(message) <= 2000)
  );