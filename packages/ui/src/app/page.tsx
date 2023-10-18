import { PageLayout } from '@/components/layouts'
import { Overview, RecentSales } from '@/pages/dashboard'
import {
  Button,
  CalendarDateRangePicker,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/theme/components'

export default function Home() {
  return (
    <PageLayout
      title="Panel"
      actions={
        <div className="flex gap-2">
          <CalendarDateRangePicker />
          <Button>Descargar</Button>
        </div>
      }
      className="flex flex-col gap-4"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incomes</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            {' '}
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 5000) + 1000
  }
]
