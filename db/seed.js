import db from "#db/client";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  const employees = [
    {
      name: "Alice",
      birthday: 1996,

      salary: 80000,
    },
    {
      name: "Bob",
      birthday: 1996,

      salary: 95000,
    },
    {
      name: "Carol",
      birthday: 1981,

      salary: 65000,
    },
    {
      name: "David",
      birthday: 1999,

      salary: 72000,
    },
    {
      name: "Emily",

      birthday: 2000,
      salary: 60000,
    },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }

  console.log(`✅ Seeded ${employees.length} employees.`);
}
