class Solution:
        def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
                meetingCount = [0] * n
                endTime = [0] * n
                # Sort Meeting by start time
                meetings.sort(key = lambda x: x[0])
                for i in range(len(meetings)):
                        [startTime, end] = meetings[i]
                        for j in range(n):
                                if(startTime >= endTime[j] or endTime[j] == -1):
                                        meetingCount[j] = meetingCount[j] + 1 
                                        endTime[j] = end
                                        break
                        else:
                                minEndTimeIndex = endTime.index(min(endTime))
                                duration = end - startTime
                                endTime[minEndTimeIndex] += duration
                                meetingCount[minEndTimeIndex] = meetingCount[minEndTimeIndex] + 1 
                return meetingCount.index(max(meetingCount))