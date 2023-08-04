import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient().$extends({
  result: {
    discoveryScore: {
      modifiedScore: {
        needs: { score: true, discoveryDate: true },
        compute(discoveryScore) {
          return `${discoveryScore.score} ${discoveryScore.discoveryDate}`;
        },
      },
    },
  },
})


async function main() {
 

  // console.dir(res, { depth: Infinity})
 
}

function getDiscoveryScore<T extends Prisma.DiscoveryScoreFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.DiscoveryScoreFindUniqueArgs>
) {
  return prisma.discoveryScore.findUnique<
      Prisma.SelectSubset<T, Prisma.DiscoveryScoreFindUniqueArgs>
  >(args);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
