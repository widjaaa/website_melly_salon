import { useState, useEffect } from 'react';
import api from '../../../services/api';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    bookings: 0,
    services: 0,
    messages: 0
  });

  useEffect(() => {
    // Basic fetch to just get lengths for now. 
    // In a real app we'd want a specific /admin/dashboard endpoint
    const fetchStats = async () => {
      try {
        const [bRes, sRes, cRes] = await Promise.all([
          api.get('/admin/bookings').catch(() => ({ data: { data: [] } })),
          api.get('/services').catch(() => ({ data: { data: [] } })),
          api.get('/admin/contacts').catch(() => ({ data: { data: [] } }))
        ]);

        // services endpoint returns nested structure based on categories
        let serviceCount = 0;
        if (sRes.data.data) {
          sRes.data.data.forEach((cat: any) => {
            serviceCount += (cat.services?.length || 0);
          });
        }

        setStats({
          bookings: bRes.data.data.length || 0,
          services: serviceCount,
          messages: cRes.data.data.length || 0,
        });
      } catch (error) {
        console.error("Failed to load dashboard stats", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-none shadow-sm border border-gray-100 flex flex-col">
          <span className="text-gray-500 text-sm font-medium">Total Bookings</span>
          <span className="text-4xl font-bold text-purple-700 mt-2">{stats.bookings}</span>
        </div>
        
        <div className="bg-white p-6 rounded-none shadow-sm border border-gray-100 flex flex-col">
          <span className="text-gray-500 text-sm font-medium">Active Services</span>
          <span className="text-4xl font-bold text-purple-700 mt-2">{stats.services}</span>
        </div>
        
        <div className="bg-white p-6 rounded-none shadow-sm border border-gray-100 flex flex-col">
          <span className="text-gray-500 text-sm font-medium">Unread Messages</span>
          <span className="text-4xl font-bold text-purple-700 mt-2">{stats.messages}</span>
        </div>
      </div>
    </div>
  );
}
