CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

ALTER TABLE
    todos
ADD
    COLUMN date_created TIMESTAMP DEFAULT now() NOT NULL;