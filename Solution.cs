
using System;
using System.Collections.Generic;

public class Solution
{
    public int[] DistinctDifferenceArray(int[] input)
    {
        HashSet<int> uniquePrefixes = new HashSet<int>();
        Dictionary<int, int> uniqueSuffixes = new Dictionary<int, int>();

        foreach (int n in input)
        {
            uniqueSuffixes[n] = uniqueSuffixes.GetValueOrDefault(n, 0) + 1;
        }

        int[] distinctDifference = new int[input.Length];
        for (int i = 0; i < input.Length; ++i)
        {
            uniquePrefixes.Add(input[i]);

            if (--uniqueSuffixes[input[i]] == 0)
            {
                uniqueSuffixes.Remove(input[i]);
            }

            distinctDifference[i] = uniquePrefixes.Count - uniqueSuffixes.Count;
        }
        return distinctDifference;
    }
}
