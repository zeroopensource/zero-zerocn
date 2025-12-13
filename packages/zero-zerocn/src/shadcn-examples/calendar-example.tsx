"use client";

import { addDays, format } from "date-fns";
import * as React from "react";
import type { DateRange } from "react-day-picker";
import { es } from "react-day-picker/locale";
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/radix/ui/button";
import {
  Calendar,
  CalendarDayButton,
} from "@/registry/bases/radix/ui/calendar";
import { Card, CardContent, CardFooter } from "@/registry/bases/radix/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/radix/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/radix/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/radix/ui/popover";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function CalendarExample() {
  return (
    <ExampleWrapper>
      <CalendarSingle />
      <CalendarMultiple />
      <CalendarWeekNumbers />
      <CalendarBookedDates />
      <CalendarRange />
      <CalendarRangeMultipleMonths />
      <CalendarWithTime />
      <CalendarWithPresets />
      <CalendarCustomDays />
      <DatePickerSimple />
      <DataPickerWithDropdowns />
      <DatePickerWithRange />
    </ExampleWrapper>
  );
}

function CalendarSingle() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  );
  return (
    <Example title="Single">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            captionLayout="dropdown"
            mode="single"
            onSelect={setDate}
            selected={date}
          />
        </CardContent>
      </Card>
    </Example>
  );
}

function CalendarMultiple() {
  return (
    <Example title="Multiple">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar mode="multiple" />
        </CardContent>
      </Card>
    </Example>
  );
}

function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  });

  return (
    <Example
      className="p-12"
      containerClassName="lg:col-span-full 2xl:col-span-full"
      title="Range"
    >
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            defaultMonth={dateRange?.from}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            mode="range"
            numberOfMonths={2}
            onSelect={setDateRange}
            selected={dateRange}
          />
        </CardContent>
      </Card>
    </Example>
  );
}

function CalendarRangeMultipleMonths() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 3, 12),
    to: addDays(new Date(new Date().getFullYear(), 3, 12), 60),
  });

  return (
    <Example
      className="p-12"
      containerClassName="lg:col-span-full 2xl:col-span-full"
      title="Range Multiple Months"
    >
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            defaultMonth={range?.from}
            fixedWeeks
            locale={es}
            mode="range"
            numberOfMonths={3}
            onSelect={setRange}
            selected={range}
          />
        </CardContent>
      </Card>
    </Example>
  );
}

function CalendarBookedDates() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  );
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 1, 12 + i)
  );

  return (
    <Example title="Booked Dates">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            defaultMonth={date}
            disabled={bookedDates}
            mode="single"
            modifiers={{
              booked: bookedDates,
            }}
            modifiersClassNames={{
              booked: "[&>button]:line-through opacity-100",
            }}
            onSelect={setDate}
            selected={date}
          />
        </CardContent>
      </Card>
    </Example>
  );
}

function CalendarWithTime() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  );

  return (
    <Example title="With Time">
      <Card className="mx-auto w-fit" size="sm">
        <CardContent>
          <Calendar
            className="p-0"
            mode="single"
            onSelect={setDate}
            selected={date}
          />
        </CardContent>
        <CardFooter className="border-t bg-card">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  defaultValue="10:30:00"
                  id="time-from"
                  step="1"
                  type="time"
                />
                <InputGroupAddon>
                  <IconPlaceholder
                    className="text-muted-foreground"
                    hugeicons="Clock03Icon"
                    lucide="Clock2Icon"
                    tabler="IconClockHour2"
                  />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="time-to">End Time</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  defaultValue="12:30:00"
                  id="time-to"
                  step="1"
                  type="time"
                />
                <InputGroupAddon>
                  <IconPlaceholder
                    className="text-muted-foreground"
                    hugeicons="Clock03Icon"
                    lucide="Clock2Icon"
                    tabler="IconClockHour2"
                  />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </FieldGroup>
        </CardFooter>
      </Card>
    </Example>
  );
}

function CalendarCustomDays() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  });

  return (
    <Example title="Custom Days">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            captionLayout="dropdown"
            className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
            components={{
              DayButton: ({ children, modifiers, day, ...props }) => {
                const isWeekend =
                  day.date.getDay() === 0 || day.date.getDay() === 6;

                return (
                  <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                    {children}
                    {!modifiers.outside && (
                      <span>{isWeekend ? "$120" : "$100"}</span>
                    )}
                  </CalendarDayButton>
                );
              },
            }}
            defaultMonth={range?.from}
            formatters={{
              formatMonthDropdown: (date) => {
                return date.toLocaleString("default", { month: "long" });
              },
            }}
            mode="range"
            numberOfMonths={1}
            onSelect={setRange}
            selected={range}
          />
        </CardContent>
      </Card>
    </Example>
  );
}

function CalendarWithPresets() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 12)
  );
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );

  return (
    <Example title="With Presets">
      <Card className="mx-auto w-fit max-w-[300px]" size="sm">
        <CardContent className="px-4">
          <Calendar
            className="p-0 [--cell-size:--spacing(9.5)]"
            fixedWeeks
            mode="single"
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            onSelect={setDate}
            selected={date}
          />
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 border-t">
          {[
            { label: "Today", value: 0 },
            { label: "Tomorrow", value: 1 },
            { label: "In 3 days", value: 3 },
            { label: "In a week", value: 7 },
            { label: "In 2 weeks", value: 14 },
          ].map((preset) => (
            <Button
              className="flex-1"
              key={preset.value}
              onClick={() => {
                const newDate = addDays(new Date(), preset.value);
                setDate(newDate);
                setCurrentMonth(
                  new Date(newDate.getFullYear(), newDate.getMonth(), 1)
                );
              }}
              size="sm"
              variant="outline"
            >
              {preset.label}
            </Button>
          ))}
        </CardFooter>
      </Card>
    </Example>
  );
}

function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Example title="Date Picker Simple">
      <Field className="mx-auto w-72">
        <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="justify-start px-2.5 font-normal"
              id="date-picker-simple"
              variant="outline"
            >
              <IconPlaceholder
                data-icon="inline-start"
                hugeicons="CalendarIcon"
                lucide="CalendarIcon"
                tabler="IconCalendar"
              />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar mode="single" onSelect={setDate} selected={date} />
          </PopoverContent>
        </Popover>
      </Field>
    </Example>
  );
}

function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  });

  return (
    <Example title="Date Picker Range">
      <Field className="mx-auto w-72">
        <FieldLabel htmlFor="date-picker-range">Date Picker Range</FieldLabel>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="justify-start px-2.5 font-normal"
              id="date-picker-range"
              variant="outline"
            >
              <IconPlaceholder
                data-icon="inline-start"
                hugeicons="CalendarIcon"
                lucide="CalendarIcon"
                tabler="IconCalendar"
              />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar
              defaultMonth={date?.from}
              mode="range"
              numberOfMonths={2}
              onSelect={setDate}
              selected={date}
            />
          </PopoverContent>
        </Popover>
      </Field>
    </Example>
  );
}

function DataPickerWithDropdowns() {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);

  return (
    <Example title="Date Picker with Dropdowns">
      <Field className="mx-auto w-72">
        <Popover onOpenChange={setOpen} open={open}>
          <FieldLabel htmlFor="date-picker-with-dropdowns-desktop">
            Date
          </FieldLabel>
          <PopoverTrigger asChild>
            <Button
              className="justify-start px-2.5 font-normal"
              id="date-picker-with-dropdowns-desktop"
              variant="outline"
            >
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <IconPlaceholder
                className="ml-auto"
                data-icon="inline-start"
                hugeicons="ArrowDownIcon"
                lucide="ChevronDownIcon"
                tabler="IconChevronDown"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar
              captionLayout="dropdown"
              mode="single"
              onSelect={setDate}
              selected={date}
            />
            <div className="flex gap-2 border-t p-2">
              <Button
                className="w-full"
                onClick={() => setOpen(false)}
                size="sm"
                variant="outline"
              >
                Done
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </Field>
    </Example>
  );
}

function CalendarWeekNumbers() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  );

  return (
    <Example className="justify-center" title="Week Numbers">
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            defaultMonth={date}
            mode="single"
            onSelect={setDate}
            selected={date}
            showWeekNumber
          />
        </CardContent>
      </Card>
    </Example>
  );
}
