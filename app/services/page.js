import Link from 'next/link'
import React from 'react'

const page = () => {
  return (<>
    <div>Service page</div>
    {" "}
      <p>Welcome to the service page!</p>
      <br />
    <ul>
      <li><Link href="/services/app-dev">App Development</Link></li>
      <li><Link href="/services/web-dev">Web Development</Link></li>
      <li><Link href="/services/seo">SEO</Link></li>
    </ul>
  </>
  )
}

export default page