"use client"

import React, { useState } from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Form, FormControl, FormDescription, FormMessage, FormLabel, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import axios from "axios"
import toast from 'react-hot-toast'
import { Pencil } from 'lucide-react'

const formSchema = z.object({
    title: z.string().min(5, {
        message: "Title is required"
    }),

})


interface TitleFormProps {
    courseId: string,
    initialData: {
        title: string;
    }
}
export default function TitleForm({ courseId, initialData }: TitleFormProps) {
    const [isEditing, setIsEditing] = useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    })
    const { isSubmitting, isValid } = form.formState

    const toggleEdit = ()=>setIsEditing(!isEditing)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {

            const response = await axios.patch(`/api/courses/${courseId}`, values)
            console.log(response,"fgffbf")
            toast.success("Course created")
            toggleEdit()
            router.refresh()
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Course Title
                <Button onClick={toggleEdit} variant="ghost">
                    {
                        isEditing && (
                            <>Cancel</>
                        )
                    }
                    {
                        !isEditing && (
                            <>
                                <Pencil className='h-4 w-4  mr-2' />
                                Edit title
                            </>
                        )
                    }

                </Button>
            </div>
            {
                !isEditing &&(
                    <p className='text-sm mt-2'>
                        {initialData.title}
                    </p>
                )
            }

            {
                isEditing &&(
                    <Form {...form}>
                    <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8 mt-8'
                    >
                      <FormField
                        control={form.control}
                        name="title"
                        render={({field})=>(
                            <FormItem>
                                <FormControl>
                                  <Input
                                  disabled={isSubmitting}
                                  placeholder="eg. Web development"
                                  {...field}
                                  />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <div className='flex items-center gap-x-2 '>
                          <Button type='submit' disabled={!isValid || isSubmitting}>
                              Save
                          </Button>
                        </div>
                    </form>
                  </Form>
                )
            }
        </div>
    )
}
