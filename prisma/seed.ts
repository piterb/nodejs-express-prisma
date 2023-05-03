import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const movieData: Prisma.movieCreateInput[] = [
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    title: "The Shawshank Redemption",
    description: "",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const m of movieData) {
    const movie = await prisma.movie.create({
      data: m,
    });
    console.log(`Created movie with id: ${movie.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
