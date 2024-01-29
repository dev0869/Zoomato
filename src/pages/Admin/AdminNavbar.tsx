import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AdminNavbar() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Products</AccordionTrigger>
        <AccordionContent>Add Products</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Settings</AccordionTrigger>
        <AccordionContent>Update Restaurant Details</AccordionContent>
        <AccordionContent>Delete Restaurant</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
