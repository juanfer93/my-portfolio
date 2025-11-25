'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { sendContactMessageAction } from '../../app/actions';
import { useToast } from '../../hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import AnimatedSection from '../animated-section';
import { CountryCodeSelect } from '../country-code-select';
import { countryCodes } from '../../lib/country-codes';
import { contactFormSchema, ContactFormValues } from '../../lib/contact-schema';
import { cn } from "../../lib/utils"



const defaultCountry = countryCodes.find(c => c.value === 'CO');

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { 
      name: '', 
      email: '', 
      countryCode: defaultCountry?.dial_code,
      phone: '', 
      message: '' 
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsLoading(true);
    try {
      const result = await sendContactMessageAction(data);
      if (result.success && result.whatsappUrl) {
        toast({
          title: 'Redirigiendo a WhatsApp',
          description: result.message,
        });
        window.open(result.whatsappUrl, '_blank');
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.message || 'No se pudo preparar el mensaje.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32">
      <AnimatedSection>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hablemos</h2>
            <p className="mt-4 max-w-xl text-foreground/80 md:text-xl/relaxed">
              ¿Tienes una idea, un proyecto o una oportunidad? Me encantaría saber de ti.
            </p>
          </div>
          <div className="mt-12 max-w-xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre" {...field} className="h-12 rounded-full px-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} className="h-12 rounded-full px-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                         <FormLabel className="sr-only">Indicativo de país</FormLabel>
                        <FormControl>
                          <CountryCodeSelect 
                            value={field.value}
                            onValueChange={field.onChange}
                           />
                        </FormControl>
                         <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="sr-only">Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Teléfono" {...field} className={cn("h-12 rounded-full px-6")} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntame sobre tu proyecto..." {...field} className="min-h-[150px] rounded-3xl p-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full rounded-full" size="lg" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Enviar Mensaje por WhatsApp
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
