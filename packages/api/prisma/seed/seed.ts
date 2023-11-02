import { PrismaClient } from '@prisma/client'
import { PRODUCTS_FOR_SEEDING } from './seeding-mocks/products'

const prisma = new PrismaClient()

async function createProducts() {
  const prismaPromises = PRODUCTS_FOR_SEEDING.map((p, i) => {
    return prisma.product.create({
      data: {
        name: p.name,
        slug: p.name.toLowerCase().replace(' ', '-'),
        description: p.description,
        productVariants: {
          createMany: {
            data: p.variantList.items.map(pv => ({
              sku: pv.sku,
              costPerUnit: pv.price - pv.price / 2,
              comparisonPrice: pv.price + pv.price / 2,
              price: pv.price,
              weight: 1.24,
              stock: 12
            }))
          }
        },
        assets: {
          create: { asset: { create: { name: 'asset' + i, source: p.assets[0].source } } }
        },
        collections: {
          create: {
            collection: {
              connectOrCreate: {
                where: { slug: p.collections[0].name.toLowerCase().replaceAll(' ', '-') },
                create: {
                  name: p.collections[0].name,
                  slug: p.collections[0].name.toLowerCase().replaceAll(' ', '-'),
                  description:
                    'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
                }
              }
            }
          }
        }
      }
    })
  })

  await prisma.$transaction(prismaPromises)
}

async function main() {
  try {
    console.log('Creating products... 🟡')
    await createProducts()
    console.log(`${PRODUCTS_FOR_SEEDING.length} Products created 🟢`)
  } catch (error) {
    console.log('An error has occurred while seeding the database 🔴')
    console.log({ error })
  }
}

main()
