import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/Card';

export function ServiceSummary() {
  return (
    <Card className="bg-white border-transparent shadow-2xl shadow-purple-900/5 rounded-[2.5rem] overflow-hidden lg:sticky lg:top-32 w-full">
      <div className="h-2 w-full bg-pink-500"></div>
      <CardHeader className="p-8 pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0 flex flex-col gap-6">
        
        <div className="flex justify-between items-center border-b border-gray-100 pb-5">
          <span className="text-gray-500 font-medium text-lg">Service</span>
          <span className="font-bold text-gray-900 text-right max-w-[60%] text-lg">To be Selected</span>
        </div>
        
        <div className="flex justify-between items-center border-b border-gray-100 pb-5">
          <span className="text-gray-500 font-medium text-lg">Duration</span>
          <span className="font-bold text-gray-900 text-lg">~ 60 Mins</span>
        </div>
        
        <div className="flex justify-between items-center pb-2 pt-2">
          <span className="text-gray-900 font-bold text-xl">Estimated</span>
          <span className="text-purple-700 font-black text-3xl">TBD</span>
        </div>
        
        <p className="text-sm text-gray-500 italic bg-pink-50/50 p-5 rounded-[1.5rem] mt-4 border border-pink-100/50 leading-relaxed">
          * This is an estimated summary. Final service duration and pricing will be confirmed at the salon based on your specific requirements during consultation.
        </p>
        
      </CardContent>
    </Card>
  );
}
