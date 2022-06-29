CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    contactNumber VARCHAR(20),
    email VARCHAR(50),
    password VARCHAR(20),
    status VARCHAR(20),
    role VARCHAR(20),
    UNIQUE(email)
);

INSERT INTO USER(
    name,
    contactNumber,
    email,
    password,
	status,
    role
)
VALUES(
    'Admin',
    '12345678',
    'admin@gmail.com',
    'admin',
    'true',
    'admin'
);