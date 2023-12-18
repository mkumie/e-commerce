import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

// eslint-disable-next-line no-unused-vars
type isAdmin = (args: AccessArgs<unknown, User>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  return checkRole(['admin'], user)
}
