
import java.util.Map;
import java.util.Set;
import java.util.HashMap;
import java.util.HashSet;

public class Solution {

    public int[] distinctDifferenceArray(int[] input) {
        Set<Integer> uniquePrefixes = new HashSet<>();
        Map<Integer, Integer> uniqueSuffixes = new HashMap<>();
        for (int n : input) {
            uniqueSuffixes.put(n, uniqueSuffixes.getOrDefault(n, 0) + 1);
        }

        int[] distinctDifference = new int[input.length];
        for (int i = 0; i < input.length; ++i) {
            uniquePrefixes.add(input[i]);

            if (uniqueSuffixes.get(input[i]) == 1) {
                uniqueSuffixes.remove(input[i]);
            } else {
                uniqueSuffixes.put(input[i], uniqueSuffixes.get(input[i]) - 1);
            }

            distinctDifference[i] = uniquePrefixes.size() - uniqueSuffixes.size();
        }
        return distinctDifference;
    }
}
