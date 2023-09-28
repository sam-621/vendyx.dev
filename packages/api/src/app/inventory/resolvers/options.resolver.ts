import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { OptionRepository } from '../repositories'
import { Option } from '../inventory'

@Resolver('Option')
export class OptionResolver {
  constructor(private repository: OptionRepository) {}

  @Query('options')
  async options() {
    return this.repository.findMany()
  }

  @Query('option')
  async QueryOption(@Args() id: string) {
    return this.repository.findOne(id)
  }

  @ResolveField('values')
  async values(@Parent() option: Option) {
    return this.repository.findOptionValuesOnOption(option.id)
  }
}
