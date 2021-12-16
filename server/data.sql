BEGIN;

DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
    "id" int GENERATED ALWAYS AS IDENTITY,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL
);

INSERT INTO "user" ("lastname", "firstname") OVERRIDING SYSTEM VALUE VALUES
('couzigou', 'corentin');
COMMIT;





