"use client";

import * as React from "react";
import { Checkbox } from "@/registry/bases/radix/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/registry/bases/radix/ui/field";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/radix/ui/table";
import { Example, ExampleWrapper } from "@/shadcn-examples/components/example";

export default function CheckboxExample() {
  return (
    <ExampleWrapper>
      <CheckboxBasic />
      <CheckboxWithDescription />
      <CheckboxInvalid />
      <CheckboxDisabled />
      <CheckboxWithTitle />
      <CheckboxInTable />
      <CheckboxGroup />
    </ExampleWrapper>
  );
}

function CheckboxBasic() {
  return (
    <Example title="Basic">
      <Field orientation="horizontal">
        <Checkbox id="terms" />
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
      </Field>
    </Example>
  );
}

function CheckboxWithDescription() {
  return (
    <Example title="With Description">
      <Field orientation="horizontal">
        <Checkbox defaultChecked id="terms-2" />
        <FieldContent>
          <FieldLabel htmlFor="terms-2">Accept terms and conditions</FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </Example>
  );
}

function CheckboxInvalid() {
  return (
    <Example title="Invalid">
      <Field data-invalid orientation="horizontal">
        <Checkbox aria-invalid id="terms-3" />
        <FieldLabel htmlFor="terms-3">Accept terms and conditions</FieldLabel>
      </Field>
    </Example>
  );
}

function CheckboxDisabled() {
  return (
    <Example title="Disabled">
      <Field orientation="horizontal">
        <Checkbox disabled id="toggle" />
        <FieldLabel htmlFor="toggle">Enable notifications</FieldLabel>
      </Field>
    </Example>
  );
}

function CheckboxWithTitle() {
  return (
    <Example title="With Title">
      <FieldGroup>
        <FieldLabel htmlFor="toggle-2">
          <Field orientation="horizontal">
            <Checkbox defaultChecked id="toggle-2" />
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                You can enable or disable notifications at any time.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="toggle-4">
          <Field data-disabled orientation="horizontal">
            <Checkbox disabled id="toggle-4" />
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                You can enable or disable notifications at any time.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </FieldGroup>
    </Example>
  );
}

const tableData = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Admin",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    email: "marcus.rodriguez@example.com",
    role: "User",
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "User",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Editor",
  },
];

function CheckboxInTable() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set(["1"])
  );

  const selectAll = selectedRows.size === tableData.length;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(tableData.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <Example title="In Table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                checked={selectAll}
                id="select-all"
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              data-state={selectedRows.has(row.id) ? "selected" : undefined}
              key={row.id}
            >
              <TableCell>
                <Checkbox
                  checked={selectedRows.has(row.id)}
                  id={`row-${row.id}`}
                  onCheckedChange={(checked) =>
                    handleSelectRow(row.id, checked === true)
                  }
                />
              </TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Example>
  );
}

function CheckboxGroup() {
  return (
    <Example title="Group">
      <Field>
        <FieldLabel>Show these items on the desktop:</FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
          <FieldLabel
            className="font-normal"
            htmlFor="finder-pref-9k2-hard-disks-ljj"
          >
            Hard disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-external-disks-1yg" />
          <FieldLabel
            className="font-normal"
            htmlFor="finder-pref-9k2-external-disks-1yg"
          >
            External disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
          <FieldLabel
            className="font-normal"
            htmlFor="finder-pref-9k2-cds-dvds-fzt"
          >
            CDs, DVDs, and iPods
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
          <FieldLabel
            className="font-normal"
            htmlFor="finder-pref-9k2-connected-servers-6l2"
          >
            Connected servers
          </FieldLabel>
        </Field>
      </Field>
    </Example>
  );
}
