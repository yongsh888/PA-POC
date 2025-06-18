PA Facility Booking system
This POC aims to use natural language to search for a type of facility around a location over a range of dates, e.g. "Find all badminton courts around Mapletree Business Centre for next Tue-Thur. To avoid the security red tapes accessing the API, we'll be

using the public PA website
using pacesapi facilityavailability endpoint to return the Facility and Availability JSON
converting the JSON into a Python DataFrame table
feeding NL questions into LLM
(future) using pacesapi searchjson endpoint to return the pricing info
Uses:

Main website - https://www.onepa.gov.sg/facilities
Facility availability - https://www.onepa.gov.sg/pacesapi/facilityavailability/GetFacilitySlots?selectedFacility=OurTampinesHub_BADMINTONCOURTS&selectedDate=20/09/2023
Scope:

Limited to 5 facility types: {"Tennis Court", "Badminton Courts", "Basketball Court", "Table Tennis Room", "Soccer Field"}
Limited to 3 days
Prices are excluded (invoked when user chose an area instead of individual facility, use https://www.onepa.gov.sg/pacesapi/facilitysearch/searchjson?facility=BADMINTON%20COURTS&outlet=Tampines&date=20/09/2023&time=all&page=1&division=)
AI Trailblazer progamme - PA tech review notes. https://docs.google.com/document/d/1uPsOJpZzgJY5msLn3iQgcXNc3zhMImClhfvh25mBKU0/edit
