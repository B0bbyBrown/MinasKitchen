import { useQuery } from "@tanstack/react-query";

interface DonationStats {
  total: number;
  average: number;
  count: number;
}

export function useDonationStats() {
  return useQuery<DonationStats>({
    queryKey: ["/api/donation-stats"],
  });
}
