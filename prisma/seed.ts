import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const articles = [
    {
      title: 'Getting started with Median',
      description: 'Intro article for the Median app',
      body: 'This is the first article body.',
      published: true,
    },
    {
      title: 'Second thoughts',
      description: null,
      body: 'Another example article body.',
      published: false,
    },
  ];

  for (const a of articles) {
    // upsert in case seed is run multiple times
    await prisma.article.upsert({
      where: { title: a.title },
      update: a,
      create: a,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
