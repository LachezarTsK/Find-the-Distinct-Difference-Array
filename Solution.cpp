
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

class Solution {
    
public:
    vector<int> distinctDifferenceArray(const vector<int>& input) const {
        unordered_set<int> uniquePrefixes;
        unordered_map<int, int> uniqueSuffixes;
        for (const auto& n : input) {
            ++uniqueSuffixes[n];
        }

        vector<int> distinctDifference(input.size());
        for (int i = 0; i < input.size(); ++i) {
            uniquePrefixes.insert(input[i]);
            if (--uniqueSuffixes[input[i]] == 0) {
                uniqueSuffixes.erase(input[i]);
            }
            distinctDifference[i] = uniquePrefixes.size() - uniqueSuffixes.size();
        }
        return distinctDifference;
    }
};
