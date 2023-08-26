-- Ensure that an email address is always stored in lowercase characters
DEFINE FIELD email ON TABLE user TYPE string
  VALUE string::lowercase($value);
  
-- Store the last time the record was updated
DEFINE FIELD updatedAt ON TABLE user TYPE datetime
  VALUE time::now();