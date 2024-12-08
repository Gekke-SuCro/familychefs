-- Insert users
INSERT INTO customer VALUES
                         (1,
                          'admin@familychefs.com',
                          'admin','$2a$12$9.t36M4YbYEni/EvJUShHuu3vNP.Svi9T3r9.JdC18w8J6yurZolW',
                          'admin'),
                         (2,
                          'user@gmail.com',
                          'user',
                          '$2a$12$yBVMTVgh9IeQaYjwKViwRen3zgxHPzpk2xUPyEoogPt.t05ykXguW',
                          'user')
ON CONFLICT DO NOTHING;

INSERT INTO roles VALUES (1,'ROLE_USER'),(2,'ROLE_ADMIN')
ON CONFLICT DO NOTHING;

INSERT INTO customer_roles VALUES (1,1),(2,2)
ON CONFLICT DO NOTHING;

-- Insert recipes
INSERT INTO recipe VALUES
                       ( 320,
                        2,
                        1,
                        'Heerlijke surinaamse nasy',
                        'Surinaamse Nasy'),
                       (20,
                        1,
                        2,
                        'Frisse tonijnsalade, alsof het vers uit de zee komt.',
                        'Frisse Tonijnsalade'),
                       (35,
                        1,
                        3,
                        'Knapperige panini met gesmolten kaas, tonijnsalade, saus en rijk belegd met olijven, pepers en kappertjes.',
                        'Pittige Panini Tonijn')
ON CONFLICT DO NOTHING;