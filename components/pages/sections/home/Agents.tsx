import cn from 'classnames';
import { Check, PenLine, RotateCw, Sticker } from 'lucide-react';
import { ReactNode } from 'react';

import { formatShortDateTimeInTimeZone } from '@/lib/date';

import { FeatureCard } from '../../components/FeatureCard';

const Label = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <span
      className={cn(className, 'text-bold mt-0.5 text-[9px] font-semibold')}
    >
      {children}
    </span>
  );
};

const Input = ({
  className,
  checked,
  multiline,
  children,
}: {
  className?: string;
  checked?: boolean;
  multiline?: boolean;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        className,
        'flex flex-row gap-2 rounded border border-neutral-100 px-1.5 text-[9px] text-neutral-900',
        {
          'items-start py-1.5': multiline,
          'items-center py-1': !multiline,
        },
      )}
    >
      <div className="flex-grow">{children}</div>
      {checked && (
        <div
          className={cn('flex-none rounded-full bg-green-500 p-[1px]', {
            'mt-0.5': multiline,
          })}
        >
          <Check className="h-1.5 w-1.5 text-white" strokeWidth={4} />
        </div>
      )}
    </div>
  );
};

const Button = ({
  className,
  color,
  size,
  children,
}: {
  className?: string;
  color?: 'violet' | 'sky' | 'black' | 'blackLight';
  size?: 'xs' | 'md';
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        className,
        {
          'bg-violet-600 text-white': color === 'violet',
          'bg-sky-600 text-white': color === 'sky',
          'bg-neutral-1000 text-white': color === 'black',
          'border border-neutral-200 bg-neutral-100 text-neutral-900':
            color === 'blackLight',
          'rounded px-2 py-1 text-[9px]': size !== 'xs' && size !== 'md',
          'rounded px-2 py-1 text-[11px]': size === 'md',
          'rounded-[3px] px-1.5 py-[3px] text-[8px]': size === 'xs',
        },
        'font-medium',
      )}
    >
      {children}
    </div>
  );
};

export const Column = ({
  offset,
  children,
}: {
  offset?: boolean;
  children: ReactNode;
}) => {
  return (
    <div className={cn({ 'mt-32': offset }, 'flex flex-col gap-8')}>
      {children}
    </div>
  );
};

export const Agents = () => {
  return (
    <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-x-8 px-8 sm:grid-cols-2">
      <Column offset>
        <FeatureCard
          Icon={Sticker}
          title="Ticket deflection"
          description="Reduce ticket volume by 50% overnight by answering customer questions automatically."
        >
          <div className="h-full w-full select-none bg-neutral-50 px-8 pt-8">
            <div className="relative flex h-full flex-col gap-2 rounded-t-lg border-l border-t border-r border-neutral-200 bg-white p-4 text-neutral-900 shadow-2xl">
              <h2 className="text-bold text-sm font-bold">New ticket</h2>
              <Label>Describe your issue</Label>
              <Input>
                I am not able to find the cancellation policy if I can&apos;t
                attend a class I&apos;ve booked. Are there any penalties or fees
                if I can&apos;t attend a booked class?
              </Input>
              <Label>Suggested answer</Label>
              <div className="flex flex-col gap-2 rounded border border-green-100 bg-green-50 p-2 text-[9px] text-neutral-900">
                <p>Hello Joyce!</p>
                <p>
                  The cancellation policy for a booked class may vary depending
                  on the studio you are booking with. Generally, we allow you to
                  cancel a class reservation without any penalty up to a certain
                  time before the class starts. However, if you cancel within 24
                  hours of the class start time, you may be subject to a late
                  cancellation fee. This fee is typically deducted from your
                  credits or charged to your payment method on file.
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-row items-center justify-end gap-4 border-t border-neutral-100 bg-neutral-50 px-4 py-2 text-[9px] shadow-[0_-20px_15px_-10px_rgba(0,0,0,0.12)]">
                <p className="text-neutral-600">
                  Did this not solve your issue?
                </p>
                <Button color="black">Create a ticket</Button>
              </div>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard
          Icon={Sticker}
          title="Automations"
          description="Trigger automations, such as reimbursements, cancelations, or customer information lookup."
        >
          <div className="relative flex h-full w-full select-none flex-col justify-center bg-neutral-50 p-8">
            <div className="w-[80%] place-self-end rounded-md bg-sky-500 px-3 py-2 text-xs text-white">
              Is there any way I can get a refund for the unused month of
              October?
            </div>
            {/* <div className="relative mt-2 flex flex-col gap-2 py-2 pl-4">
              <div className="absolute inset-y-0 left-[21px] z-0 w-1 border-l border-dashed border-neutral-200" />
              <div className="flex flex-row items-center gap-2">
                <div className="relative z-10 flex-none rounded-full bg-green-500 p-[3px]">
                  <Check
                    className="h-[5px] w-[5px] text-white"
                    strokeWidth={4}
                  />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Checking eligibility for user robyn@globex.com...
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="relative z-10 flex-none rounded-full bg-green-500 p-[3px]">
                  <Check
                    className="h-[5px] w-[5px] text-white"
                    strokeWidth={4}
                  />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Eligibility confirmed.
                </p>
              </div>
            </div> */}
            <div className="mt-4 w-[80%] place-self-start rounded-md bg-neutral-200 px-3 py-2 text-xs text-neutral-900">
              Yes, you are eligible for a full refund for the month of October.
              Do you want to proceed with the refund?
            </div>
            <div className="mt-2 flex flex-row gap-1">
              <Button size="md" color="black">
                Yes, process my refund
              </Button>
              <Button size="md" color="blackLight">
                No
              </Button>
            </div>
            {/* <div className="relative mt-2 flex flex-col gap-2 py-2 pl-4">
              <div className="absolute inset-y-0 left-[21px] z-0 w-1 border-l border-dashed border-neutral-200" />
              <div className="flex flex-row items-center gap-2">
                <div className="relative z-10 flex-none rounded-full bg-green-500 p-[3px]">
                  <Check
                    className="h-[5px] w-[5px] text-white"
                    strokeWidth={4}
                  />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Processing refund for user robyn@globex.com...
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="relative z-10 flex-none rounded-full bg-green-500 p-[3px]">
                  <Check
                    className="h-[5px] w-[5px] text-white"
                    strokeWidth={4}
                  />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Refund successfully processed.
                </p>
              </div>
            </div> */}
          </div>
        </FeatureCard>
      </Column>
      <Column>
        <FeatureCard
          Icon={Sticker}
          title="Triage"
          description="Categorize, summarize, translate, preprocess tickets so you can take action with the full picture."
        >
          <div className="h-full w-full select-none bg-neutral-50 px-8">
            <div className="h-full border-l border-r border-neutral-200 bg-white px-4 pt-2 shadow-2xl">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-neutral-900">
                <Label className="col-span-2">Product</Label>
                <Input checked className="col-span-2">
                  Acme Platform
                </Input>
                <Label>Problem area</Label>
                <Label>Severity level</Label>
                <Input checked>Cron jobs</Input>
                <Input checked>
                  <span className="h-[5px] w-[5px] rounded-full bg-red-500" />
                  High
                </Input>
                <Label className="col-span-2">Subject</Label>
                <Input checked className="col-span-2">
                  Cron service is down
                </Input>
                <Label className="col-span-2">Message</Label>
                <Input checked multiline className="col-span-2">
                  <div>
                    <p>
                      <span className="font-bold">Processed message:</span> We
                      are experiencing 404 errors on the cron endpoint since
                      this morning. Upon reviewing the logs, it appears that
                      this error is not properly detected.
                    </p>
                    <p className="mt-2 italic">
                      <span className="font-bold">Original message:</span> Help!
                      Cron is alwys retunning 404s now its happening all the
                      time since this morning!!! Ntohing to see in the logs!
                    </p>
                  </div>
                </Input>
                <div className="col-span-2 mt-1 flex justify-start">
                  <Button color="black">Submit case</Button>
                </div>
              </div>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard
          Icon={Sticker}
          title="AI Draft Composer"
          subtitle={
            <div className="-mt-2 flex justify-start">
              <div className="gap-2 rounded-md bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-500">
                for Salesforce and Zendesk
              </div>
            </div>
          }
          description="Generate responses in a click, adhering to your company's brand and tone, based on expert knowledge."
        >
          <div className="relative h-full w-full select-none bg-neutral-50">
            <div className="absolute top-8 right-8 left-0 bottom-0 flex flex-row items-start gap-2 rounded-tr-md border-t border-r border-blue-200 bg-blue-100 pt-2 pr-2 shadow-xl">
              <div className="flex h-full w-[100px] flex-none flex-col items-end gap-2 rounded-tr border-t border-r bg-white pt-2 pr-2">
                <div className="flex w-full flex-col overflow-hidden rounded-r border-t border-r border-b border-neutral-200">
                  <div className="h-8 border-b border-neutral-200 bg-neutral-100" />
                  <div className="flex flex-row items-center justify-end gap-2 py-2 pr-2">
                    <div className="h-[18px] flex-grow rounded-r border-t border-r border-b border-neutral-200" />
                    <Button className="flex-none" color="sky" size="xs">
                      Compose
                    </Button>
                  </div>
                </div>
                <div className="rounded border border-neutral-200 bg-neutral-50 p-1 text-neutral-500">
                  <RotateCw className="h-2 w-2" />
                </div>
                <p className="text-right text-[7px] font-medium text-sky-600">
                  {formatShortDateTimeInTimeZone(new Date())}
                </p>
              </div>
              <div className="flex-grow rounded border bg-white px-2 pt-1">
                <div className="flex flex-row items-center gap-2 border-b border-neutral-100 text-[9px]">
                  <span className="px-1 py-0.5 text-neutral-500">Details</span>
                  <span className="border-b border-sky-500 px-1 py-0.5 font-medium text-neutral-900">
                    Markprompt
                  </span>
                </div>
                <div className="flex flex-col gap-1 pb-2">
                  <div className="flex flex-row items-center gap-2 px-1 pt-1.5">
                    <div className="rounded-[3px] bg-neutral-900 p-0.5 text-white">
                      <PenLine className="h-2 w-2" />
                    </div>
                    <span className="mt-1 text-[9px] font-semibold text-neutral-900">
                      AI Draft Composer
                    </span>
                  </div>
                  <Input className="mt-1">
                    <div className="flex flex-col gap-1">
                      <p>Hi Tyler!</p>
                      <p>
                        Yes, the cancellation policy for a booked class may vary
                        depending on the studio you are booking with. Generally,
                        we allow you to cancel a class reservation without any
                        penalty up to 12 hours before the class starts. However,
                        if you cancel later than that, you will be subject to a
                        late cancellation fee. This fee is deducted from your
                        credits.
                      </p>
                      <p>Best,</p>
                      <p>Joshua</p>
                    </div>
                  </Input>
                  <div className="flex flex-row items-center gap-1">
                    <Button size="xs" color="sky">
                      Generate draft
                    </Button>
                    <Button size="xs" color="sky">
                      Insert reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-4 mr-4 h-full border-l border-r border-neutral-200 bg-white px-4 pt-2 shadow-2xl"></div> */}
          </div>
        </FeatureCard>
      </Column>
    </div>
  );
};
