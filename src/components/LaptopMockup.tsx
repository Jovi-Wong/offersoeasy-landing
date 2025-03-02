export default function LaptopMockup() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[580px] h-[400px] bg-white border-[8px] border-gray-800 rounded-t-xl flex justify-center items-center">
        <div className="w-11/12 h-5/6 mockup-window bg-base-300 border">
          <div className="bg-base-200 w-full h-full p-4 flex flex-col gap-2">
            <div className="text-lg">
              请问快速排序在最坏的情况下时间复杂度和空间复杂度是多少？
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  A
                </div>
                <span>时间复杂度O(n^2)，空间复杂度O(1)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  B
                </div>
                <span>时间复杂度O(nlogn)，空间复杂度O(n)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  C
                </div>
                <span>时间复杂度O(nlogn)，空间复杂度O(logn)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  D
                </div>
                <span>时间复杂度O(n^2)，空间复杂度O(n)</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-[600px] h-[20px] bg-black flex justify-center rounded-b-xl">
        <span className="w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></span>
      </div>
    </div>
  );
}
