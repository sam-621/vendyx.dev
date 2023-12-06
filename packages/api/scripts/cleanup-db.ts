import { PrismaClient } from '@prisma/client'

const cleanupDb = async () => {
  try {
    const prismaClient = new PrismaClient()

    console.log('Cleaning up DB... 🟡')

    await prismaClient.$transaction([
      prismaClient.optionValueOnProductVariant.deleteMany(),
      prismaClient.optionValue.deleteMany(),
      prismaClient.option.deleteMany(),
      prismaClient.assetOnProduct.deleteMany(),
      prismaClient.assetOnCollection.deleteMany(),
      prismaClient.asset.deleteMany(),
      prismaClient.productVariant.deleteMany(),
      prismaClient.productOnCollection.deleteMany(),
      prismaClient.product.deleteMany(),
      prismaClient.collection.deleteMany()
    ])

    console.log('Database has been cleaned successfully 🟢')
  } catch (error) {
    console.log('An error has occurred during clean.. 🔴')
    console.log(error)
  }
}

cleanupDb()
