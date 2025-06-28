
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about NJSLA</p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              What is the NJSLA and why is it important?
            </AccordionTrigger>
            <AccordionContent>
              The New Jersey Student Learning Assessments (NJSLA) are state-required tests that measure student achievement in English Language Arts and Mathematics. They help educators, parents, and students understand academic progress and identify areas for growth.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              When do students take the NJSLA?
            </AccordionTrigger>
            <AccordionContent>
              NJSLA testing typically occurs during the spring testing window, from mid-April through the end of May. Specific dates may vary by school district. Students in grades 3-11 participate in the assessments.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              How can students prepare for the NJSLA?
            </AccordionTrigger>
            <AccordionContent>
              Students can prepare by taking practice tests, reviewing study guides, and working with their teachers on areas of difficulty. The best preparation is consistent learning throughout the school year and becoming familiar with the test format through practice.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              What accommodations are available for students with disabilities?
            </AccordionTrigger>
            <AccordionContent>
              Students with disabilities may receive various accommodations such as extended time, alternative formats, assistive technology, or breaks as specified in their IEP or 504 plan. These accommodations are determined by the student's educational team.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              How are NJSLA results used?
            </AccordionTrigger>
            <AccordionContent>
              NJSLA results help teachers understand student progress, inform instructional decisions, and identify students who may need additional support. Results are also used at the state level to evaluate school and district performance and ensure educational equity.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">
              When will results be available?
            </AccordionTrigger>
            <AccordionContent>
              NJSLA results are typically available in late summer or early fall following the spring testing window. Parents and students receive individual score reports, while schools and districts receive aggregate data to analyze performance trends.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
