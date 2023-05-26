import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/images/Logo.svg" alt="" width={64} height={64} />
    </Link>
  );
};

export default Logo;
