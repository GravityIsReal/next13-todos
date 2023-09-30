/*
  Warnings:

  - Added the required column `completed` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL
);
INSERT INTO "new_Todo" ("id", "text") SELECT "id", "text" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
CREATE UNIQUE INDEX "Todo_id_key" ON "Todo"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
