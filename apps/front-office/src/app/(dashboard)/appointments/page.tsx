"use client";

import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@mcw/ui";
import { MapPin, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentsPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        <div className="bg-gray-50 p-4 md:p-6 rounded-md flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8">
          <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-0">
            New appointment?
          </p>
          <Button className="bg-green-700 hover:bg-green-800 text-white text-xs md:text-sm w-full md:w-auto">
            REQUEST NOW
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="border-b mb-6 md:mb-8 overflow-x-auto">
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="upcoming"
                  className="pb-2 px-3 md:px-4 text-xs md:text-sm data-[state=active]:border-b-2 data-[state=active]:border-green-700 data-[state=active]:text-green-700 data-[state=active]:shadow-none rounded-none bg-transparent text-gray-500"
                >
                  UPCOMING
                </TabsTrigger>
                <TabsTrigger
                  value="requested"
                  className="pb-2 px-3 md:px-4 text-xs md:text-sm data-[state=active]:border-b-2 data-[state=active]:border-green-700 data-[state=active]:text-green-700 data-[state=active]:shadow-none rounded-none bg-transparent text-gray-500"
                >
                  REQUESTED
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="mt-0">
              <div className="border rounded-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div className="text-gray-500 text-xs md:text-sm">
                      apr 09, 2023
                    </div>
                    <div className="text-gray-800 font-medium text-sm md:text-base">
                      8:00PM—9:30PMPKT
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 text-xs md:text-sm">
                      <User className="h-3 w-3 md:h-4 md:w-4 text-green-700 flex-shrink-0" />
                      <span>Travis McNulty</span>
                    </div>

                    <div className="flex items-start gap-2 text-gray-700 text-xs md:text-sm">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4 text-green-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <div>111 2nd Ave NE, Suite 1101</div>
                        <div>Saint Petersburg, FL 33701-3443</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-6 pt-2">
                      <Link
                        href="#"
                        className="text-xs md:text-sm text-green-700 hover:underline"
                      >
                        Add to Calendar
                      </Link>
                      <Link
                        href="tel:7273449867"
                        className="text-xs md:text-sm text-green-700 hover:underline"
                      >
                        Call to cancel (727) 344-9867
                      </Link>
                    </div>
                  </div>

                  <div className="relative h-[150px] md:h-auto">
                    <div className="absolute inset-0">
                      <Image
                        src="/map-preview.jpg"
                        alt="Map location"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white text-[10px] md:text-xs py-1 px-2 h-auto">
                        DIRECTIONS
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="requested" className="mt-0">
              <div className="text-center py-8 md:py-12">
                <p className="text-gray-500 text-sm">
                  You don't have any requested appointments.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
