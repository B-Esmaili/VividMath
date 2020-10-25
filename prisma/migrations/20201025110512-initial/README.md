# Migration `20201025110512-initial`

This migration has been generated by besmaili at 10/25/2020, 11:05:12 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201025110512-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,14 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+model User {
+  email String  @unique
+  id    Int     @default(autoincrement()) @id
+  name  String?
+} 
```

