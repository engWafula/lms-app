import React from 'react';
import { Badge } from './ui/badge';
import Image from 'next/image'

const CertificateDoc = ({name}:any) => {


  return (
    <div className="w-full max-w-6xl  mx-auto p-8 border-4 border-gray-300 rounded-lg bg-gradient-to-r from-white to-blue-gray-100 text-gray-800 ">
      <div className="flex justify-center items-center mb-8">
        <Image
          height={100}
          width={100}
          src="/logo.png"
          alt='logo'
          className="w-50 h-50 rounded-full"
        />
        <div className="ml-4 text-4xl font-extrabold">Certificate of Completion</div>
      </div>
      <div className="text-lg text-justify mb-8">
        <p className="mb-2 font-bold text-center text-2xl">This is to certify that</p>
        <p className="mb-4 font-bold text-center text-3xl">{name}</p>
        <p className="mb-4 text-center">has successfully completed the</p>
        <p className="text-center font-bold text-2xl mb-4">Node.js Course</p>
        <p className="italic text-center">Issued on: {new Date().toDateString()}</p>
      </div>
      <div className="flex justify-between items-center text-base italic">
        <Badge className="mt-4 rounded-full px-4 py-2 bg-gray-800 text-white">
          Instructor: Allan
        </Badge>
        <Image
          height={80}
          width={80}
          src="/sign.png"
          alt="Signature"      
          className="w-50 h-50 rounded-xl"      
            />
      </div>
    </div>
  );
};

export default CertificateDoc;