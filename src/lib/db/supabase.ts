export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          email: string
          id: string
          location: string | null
          name: string | null
          username: string | null
        }
        Insert: {
          email: string
          id: string
          location?: string | null
          name?: string | null
          username?: string | null
        }
        Update: {
          email?: string
          id?: string
          location?: string | null
          name?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admins_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      center_profiles: {
        Row: {
          attendance: string[] | null
          created_at: string
          exploration_bg_src: string | null
          id: string | null
          location: string | null
          training_bg_src: string | null
          typing_bg_src: string | null
        }
        Insert: {
          attendance?: string[] | null
          created_at?: string
          exploration_bg_src?: string | null
          id?: string | null
          location?: string | null
          training_bg_src?: string | null
          typing_bg_src?: string | null
        }
        Update: {
          attendance?: string[] | null
          created_at?: string
          exploration_bg_src?: string | null
          id?: string | null
          location?: string | null
          training_bg_src?: string | null
          typing_bg_src?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "center_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "center_profiles_location_fkey"
            columns: ["location"]
            isOneToOne: false
            referencedRelation: "admins"
            referencedColumns: ["location"]
          },
        ]
      }
      student_profiles: {
        Row: {
          belt: string | null
          center: string | null
          click_accuracy: string[] | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          event_completed: boolean | null
          id: string
          name: string | null
          points: number | null
          profile_banner_src: string | null
          profile_icon_src: string | null
          quests_completed: string | null
          student_number: string | null
          username: string | null
          wpm: string | null
        }
        Insert: {
          belt?: string | null
          center?: string | null
          click_accuracy?: string[] | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          event_completed?: boolean | null
          id: string
          name?: string | null
          points?: number | null
          profile_banner_src?: string | null
          profile_icon_src?: string | null
          quests_completed?: string | null
          student_number?: string | null
          username?: string | null
          wpm?: string | null
        }
        Update: {
          belt?: string | null
          center?: string | null
          click_accuracy?: string[] | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          event_completed?: boolean | null
          id?: string
          name?: string | null
          points?: number | null
          profile_banner_src?: string | null
          profile_icon_src?: string | null
          quests_completed?: string | null
          student_number?: string | null
          username?: string | null
          wpm?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
