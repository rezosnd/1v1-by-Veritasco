import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
  console.log('Seeding demo data...')
  
  // 1. Create Demo Users
  const user1 = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      username: 'alice_coder',
      elo: 1200,
      coins: 500,
      rank: 'Silver'
    },
  })

  const user2 = await prisma.user.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      email: 'bob@example.com',
      username: 'bob_builder',
      elo: 1100,
      coins: 300,
      rank: 'Bronze'
    },
  })

  // 2. Create Problems
  const problem1 = await prisma.problem.create({
    data: {
      title: 'Two Sum',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      constraints: '2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9',
      inputFormat: 'Array of integers nums, integer target',
      outputFormat: 'Array of two integers (indices)',
      difficulty: 'EASY',
      tags: {
        connectOrCreate: [
          { where: { name: 'Array' }, create: { name: 'Array' } },
          { where: { name: 'Hash Table' }, create: { name: 'Hash Table' } }
        ]
      },
      examples: [
        { input: '[2,7,11,15]\n9', output: '[0,1]' },
        { input: '[3,2,4]\n6', output: '[1,2]' }
      ],
      testCases: {
        create: [
          { input: '[2,7,11,15]\n9', expectedOut: '[0,1]', isHidden: false },
          { input: '[3,2,4]\n6', expectedOut: '[1,2]', isHidden: false },
          { input: '[3,3]\n6', expectedOut: '[0,1]', isHidden: true }
        ]
      }
    }
  })

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
