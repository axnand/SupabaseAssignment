
import React, { useState } from 'react';
import Button from '../ui/Button';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../ui/Collapsible"


const PricingPage = () => {
  return (
<div className="dark:bg-zinc-900 bg-gray-100">
      <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Pricing</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">Choose the plan that's right for your business.</p>
        </div>
        <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-8">
          <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-muted-foreground">Perfect for individuals or small teams just getting started.</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Up to 5 users
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                5GB storage
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Basic analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Email support
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </div>
          <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-muted-foreground">For growing teams that need more features and support.</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Up to 25 users
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                50GB storage
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Advanced analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Priority email support
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Dedicated account manager
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </div>
          <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-muted-foreground">For large teams and organizations with advanced needs.</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">$499</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Unlimited users
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Unlimited storage
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Enterprise-grade analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Dedicated 24/7 support
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Custom integrations and features
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted rounded-2xl">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <div className="grid gap-6 py-6 ">
              <Collapsible className="grid gap-2 ">
              
                <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  What is the difference between the Starter, Pro, and Enterprise plans?
                  
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="text-muted-foreground">
                    The main differences between the plans are the number of users, storage space, analytics
                    capabilities, and support level. The Starter plan is best for individuals or small teams, the Pro
                    plan is for growing teams, and the Enterprise plan is for large organizations with advanced needs.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  Can I upgrade or downgrade my plan at any time?
                  
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new plan will take
                    effect immediately. If you downgrade, the new plan will take effect at the end of your current
                    billing cycle.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  Do you offer any discounts or promotions?
                  
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="text-muted-foreground">
                    Yes, we occasionally offer discounts and promotions. You can check our website or contact our sales
                    team for the latest offers. We also provide a 10% discount for annual billing.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                  What is your refund policy?
                  
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="text-muted-foreground">
                    We offer a 30-day money-back guarantee. If you're not satisfied with our product, you can cancel
                    your subscription and receive a full refund within the first 30 days.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for you and your team. Sign up today and start building better web
              experiences.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline" className="w-full min-[400px]:w-auto">
                Contact Sales
              </Button>
              <Button className="w-full min-[400px]:w-auto">Sign Up</Button>
            </div>
          </div>
        </div>
      </section>
    </div>

      </section>
    </div>

  );
};

export default PricingPage;



function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}