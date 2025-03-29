
import React, { useState, useEffect } from 'react';
import { api } from '@/api/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const ApiExample = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Example API call to your Flask backend
      const response = await api.getData();
      setData(response);
      toast({
        title: "Success",
        description: "Data fetched successfully from Flask backend",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Flask Backend Example</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={fetchData} disabled={loading}>
          {loading ? "Loading..." : "Fetch Data from Flask"}
        </Button>
        
        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        {data && (
          <div className="p-3 bg-green-50 rounded-md">
            <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
        
        <div className="text-sm text-muted-foreground">
          <p>Note: Make sure your Flask backend is running at {process.env.REACT_APP_API_URL || 'http://localhost:5000'}</p>
          <p>Also ensure CORS is properly configured on your Flask backend.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiExample;
