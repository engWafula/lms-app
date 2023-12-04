"use client"
import React, { useState, useEffect } from 'react';
import CertificateDoc from '@/components/certificate-doc'
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
// import { db } from "@/lib/db";

export default  function Page() {


  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (


<div className="flex flex-col max-w-4xl mx-auto pb-40">
<div className="p-4">
   <CertificateDoc name={user?.fullName}/> 

</div> <div>
  <div className="p-4 flex flex-col md:flex-row items-center justify-between">
    <h2 className="text-2xl font-semibold mb-2">
      {/* {chapter.title} */}
    </h2>
    <Button
      // onClick={onClick}
      // disabled={isLoading}
      size="sm"
      className="w-full md:w-auto"
    >
      Download
    </Button>
    
  </div>
  <Separator />

</div> 
</div>
  )
}
