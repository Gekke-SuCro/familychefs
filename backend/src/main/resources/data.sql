-- Insert users
INSERT INTO customer
VALUES
    (1,
        'admin@familychefs.com',
        'admin','$2a$12$9.t36M4YbYEni/EvJUShHuu3vNP.Svi9T3r9.JdC18w8J6yurZolW',
        'admin'
    ),
    (2,
     'user@gmail.com',
     'user',
     '$2a$12$yBVMTVgh9IeQaYjwKViwRen3zgxHPzpk2xUPyEoogPt.t05ykXguW',
     'user'
    )
ON CONFLICT DO NOTHING;

INSERT INTO roles
VALUES (1,'ROLE_USER'),(2,'ROLE_ADMIN')
ON CONFLICT DO NOTHING;

INSERT INTO customer_roles
VALUES (1,1),(2,2)
ON CONFLICT DO NOTHING;

-- Insert ingredients
INSERT INTO ingredient (id, name)
VALUES (1,
        'basmati rijst'),
    (2,
     'ui'),
    (3,
     'ketjap manis')
ON CONFLICT DO NOTHING;

-- Insert recipes
INSERT INTO recipe
VALUES (320,
        2,
        1,
        'Heerlijke surinaamse nasy',
        'Surinaamse Nasy'
       )
ON CONFLICT DO NOTHING;

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, measure_unit, quantity)
VALUES
    (1, 1, 'GRAM', 300),
    (1, 2, 'PIECE', 2),
    (1, 3, 'TEA_SPOON', 3)
ON CONFLICT DO NOTHING;