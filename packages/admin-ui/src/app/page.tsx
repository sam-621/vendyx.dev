'use client'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar'
import { Image } from '@nextui-org/image'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import { Input } from '@nextui-org/input'
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal,
  useDisclosure
} from '@nextui-org/react'
// import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleSubmit = () => {
    console.log('hola')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
      </form>
      <div className="flex gap-3">
        <Button color="primary" radius="sm">
          Click me
        </Button>
        <Button color="primary" radius="sm" variant="bordered">
          Click me
        </Button>
        <Button color="primary" radius="sm" variant="light">
          Click me
        </Button>
        <Button color="primary" radius="sm" variant="flat">
          Click me
        </Button>
        <Button color="primary" radius="sm" variant="ghost">
          Click me
        </Button>
        <Button color="primary" isDisabled radius="sm">
          Click me
        </Button>
        <Button color="primary" isLoading radius="sm">
          Click me
        </Button>
      </div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      {/* <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table> */}

      <Input type="email" label="Email" />
      <Input type="email" label="Email" variant="bordered" />
      <Input type="email" label="Email" variant="underlined" />

      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
