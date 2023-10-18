import { Avatar } from '@/theme/components'

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar
          className="h-9 w-9"
          src="https://ui.shadcn.com/avatars/01.png"
          alt="user"
          fallBack="OM"
        />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar
          className="h-9 w-9"
          src="https://ui.shadcn.com/avatars/01.png"
          alt="user"
          fallBack="OM"
        />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar
          className="h-9 w-9"
          src="https://ui.shadcn.com/avatars/01.png"
          alt="user"
          fallBack="OM"
        />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar
          className="h-9 w-9"
          src="https://ui.shadcn.com/avatars/01.png"
          alt="user"
          fallBack="OM"
        />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar
          className="h-9 w-9"
          src="https://ui.shadcn.com/avatars/01.png"
          alt="user"
          fallBack="OM"
        />
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
    </div>
  )
}
