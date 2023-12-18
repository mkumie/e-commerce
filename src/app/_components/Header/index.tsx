{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'

// import Link from 'next/link'
import { Header as Headers } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'

// import { Gutter } from '../Gutter'
// import { HeaderNav } from './Nav'

// import classes from './index.module.scss'

export async function Header() {
  let header: Headers | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
