import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
import './AccordionItem.css';

export default function AccordionItem({ title, content, onClick, isOpen}) {
  const itemClasses = isOpen ? `accordion-item accordion-item--active` : `accordion-item`;
  
  return (
    <div className={itemClasses}>
      <AccordionHeader onClick={onClick}>{ title }</AccordionHeader>
      <AccordionContent>{ content }</AccordionContent>
    </div>
  )
}