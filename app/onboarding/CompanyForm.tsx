import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { companySchema } from "../utils/zodSchema"
import {z} from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CompanyForm(){
    const form = useForm<z.infer<typeof companySchema>>({
        resolver: zodResolver(companySchema),
        defaultValues:{
            about: "",
            location: "",
            logo: "",
            name: "",
            website: "",
            xAccount: "",

        },
    });
    return(
        <Form {...form}>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Company Name
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Compny Name" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                      <FormField
                        control={form.control}
                        name="location"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Company Location
                                </FormLabel>
                                <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Location"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Worldwide</SelectLabel>
                                            <SelectItem value="worldwide">
                                                <span>🌍</span><span>Worldwide / Remote</span>
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}